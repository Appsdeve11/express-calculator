const express = require('express');
const app = express();

app.get('/mean', (req, res) => {
  const nums = req.query.nums.split(',').map(Number);
  const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
  res.json({ mean });
});

app.get('/median', (req, res) => {
  const nums = req.query.nums.split(',').map(Number).sort((a, b) => a - b);
  const middle = Math.floor(nums.length / 2);
  const median =
    nums.length % 2 === 0
      ? (nums[middle - 1] + nums[middle]) / 2
      : nums[middle];
  res.json({ median });
});

app.get('/mode', (req, res) => {
  const nums = req.query.nums.split(',').map(Number);
  const frequency = {};
  let mode = [];
  let maxFrequency = 0;
  for (const num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      mode = [num];
    } else if (frequency[num] === maxFrequency) {
      mode.push(num);
    }
  }
  res.json({ mode });
});