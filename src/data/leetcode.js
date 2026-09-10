

const LEETCODE_ENDPOINT = 'http://localhost:3001/api/leetcode/DyIhE889d2';
// const LEETCODE_ENDPOINT = 'https://portfoliobackend-nmzg.onrender.com/api/leetcode/DyIhE889d2';

export async function fetchLeetCodeActivity(signal) {
  const response = await fetch(LEETCODE_ENDPOINT, { signal });

  if (!response.ok) {
    throw new Error(`LeetCode API returned ${response.status}`);
  }

  return response.json();
}

export { LEETCODE_ENDPOINT };
