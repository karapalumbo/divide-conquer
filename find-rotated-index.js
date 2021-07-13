function findPivot(nums, firstVal, low, high) {
  if (high < low) return 0;

  const mid = Math.floor((low + high) / 2);

  if (nums[mid] < firstVal) {
    if (mid === 0 || nums[mid - 1] > nums[mid]) {
      return mid;
    } else {
      return findPivot(nums, firstVal, low, mid - 1);
    }
  } else {
    return findPivot(nums, firstVal, mid + 1, high);
  }
}

function binarySearchRange(nums, sought, low, high) {
  if (high < low) return -1;

  const mid = Math.floor((low + high) / 2);

  if (nums[mid] === sought) {
    return mid;
  } else if (nums[mid] < sought) {
    return binarySearchRange(nums, sought, mid + 1, high);
  } else {
    return binarySearchRange(nums, sought, low, mid - 1);
  }
}

function findRotatedIndex(nums, sought) {
  const pivot = findPivot(nums, nums[0], 0, nums.length);

  if (pivot === 0) {
    return binarySearchRange(nums, sought, 0, nums.length);
  } else if (sought < nums[0]) {
    return binarySearchRange(nums, sought, pivot, nums.length);
  } else {
    return binarySearchRange(nums, sought, 0, pivot - 1);
  }
}

module.exports = findRotatedIndex;
