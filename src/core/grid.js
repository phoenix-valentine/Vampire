// A uniform grid for "who is near this point" questions.
// Rebuilt every simulation step; no allocation after warm-up.

export function createGrid(cellSize) {
  const cells = new Map();
  const pool = [];
  const used = [];
  const inv = 1 / cellSize;

  function key(cx, cy) {
    return (cx + 32768) * 65536 + (cy + 32768);
  }

  function clear() {
    for (let i = 0; i < used.length; i++) {
      const bucket = used[i];
      bucket.length = 0;
      pool.push(bucket);
    }
    used.length = 0;
    cells.clear();
  }

  function insert(item) {
    const k = key(Math.floor(item.x * inv), Math.floor(item.y * inv));
    let bucket = cells.get(k);
    if (!bucket) {
      bucket = pool.pop() || [];
      cells.set(k, bucket);
      used.push(bucket);
    }
    bucket.push(item);
  }

  // Calls fn(item) for every item whose cell touches the circle. The caller checks exact distance.
  // Returning true from fn stops the search early.
  function query(x, y, radius, fn) {
    const x0 = Math.floor((x - radius) * inv);
    const x1 = Math.floor((x + radius) * inv);
    const y0 = Math.floor((y - radius) * inv);
    const y1 = Math.floor((y + radius) * inv);
    for (let cy = y0; cy <= y1; cy++) {
      for (let cx = x0; cx <= x1; cx++) {
        const bucket = cells.get(key(cx, cy));
        if (!bucket) {
          continue;
        }
        for (let i = 0; i < bucket.length; i++) {
          if (fn(bucket[i]) === true) {
            return true;
          }
        }
      }
    }
    return false;
  }

  return { clear, insert, query, cellSize };
}
