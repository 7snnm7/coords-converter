function convert(q) {
  if (!q) return 'Input should be in this state “!c OX OY OZ” or “!c NX NY NZ” check out twitch.tv/hassannm7';
  const parts = q.trim().split(/\s+/);
  const isOverworld = parts[0].toLowerCase() === 'o';
  const nums = parts.filter(x => !isNaN(x)).map(Number);

  if (nums.length < 2 || nums.length > 3)
    return 'Input should be in this state “!c OX OY OZ” or “!c NX NY NZ” check out twitch.tv/hassannm7';

  const factor = isOverworld ? 8 : 1 / 8;
  const x = Math.round(nums[0] * factor);
  const z = Math.round(nums[nums.length - 1] * factor);
  const world = isOverworld ? 'Overworld' : 'Nether';
  return `${world} Side Coordinates Are: (${x}, Y, ${z})`;
}

convert(q);
