function convertCoord(input) {
  let a = input.trim().split(" ");
  if (a.length < 2 || a.length > 4) {
    return 'Input should be in this state “!c OX OY OZ” or “!c o NX NY NZ” check out my creator twitch.tv/hassannm7';
  }

  let isOver = a[0].toLowerCase() === "o";
  let nums = a.filter(x => x.toLowerCase() !== "o").map(Number);
  if (nums.some(isNaN)) {
    return 'Input should be in this state “!c OX OY OZ” or “!c o NX NY NZ” check out my creator twitch.tv/hassannm7';
  }

  if (isOver) {
    let x = Math.round(nums[0] * 8);
    let y = nums.length === 3 ? nums[1] : "Y";
    let z = Math.round((nums.length === 3 ? nums[2] : nums[1]) * 8);
    return `Overworld Side Coordinates Are: (${x}, ${y}, ${z})`;
  } else {
    let x = Math.round(nums[0] / 8);
    let y = nums.length === 3 ? nums[1] : "Y";
    let z = Math.round((nums.length === 3 ? nums[2] : nums[1]) / 8);
    return `Nether Side Coordinates Are: (${x}, ${y}, ${z})`;
  }
}

var q = `$(query)`;
convertCoord(q);
