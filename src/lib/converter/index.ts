export function convert(target: string, template: string, output: string) {
  const result: { key: string; value: string }[][] = [[]];
  let lines = template.split('\n');
  let line = lines.shift() ?? '';
  const regKey = /{.*}/;

  const reset = () => {
    if (result[result.length - 1].length !== 0) {
      result.push([]);
    }
    lines = template.split('\n');
    newLine();
  };

  const newLine = () => {
    const newLine = lines.shift();
    if (!newLine) {
      reset();
    } else {
      line = newLine;
    }
  };

  const checkAndAddKeyValue = (row: string) => {
    const keys = regKey.exec(line.trim());
    if (!keys) {
      return false;
    }
    const parts = line.trim().split(regKey);
    for (let i = 0; i < keys.length; i++) {
      const regValue = new RegExp(`(?<=${parts[i]}).*(?=${parts[i + 1]})`);
      const value = regValue.exec(row.trim());
      if (value) {
        const key = keys[i];
        result[result.length - 1].push({ key: key, value: value[0] });
      } else {
        return false;
      }
    }
    return true;
  };

  for (const row of target.split('\n')) {
    if (checkAndAddKeyValue(row)) {
      newLine();
    } else {
      if (row.trim() === line.trim()) {
        newLine();
      } else {
        reset();
      }
    }
  }
  if (result[result.length - 1].length === 0) {
    result.pop();
  }
  return result.reduce(
    (previousValue, item) =>
    (previousValue += item.reduce(
      (previousValue, { key, value }) => previousValue.replace(key, value),
      output
    )),
    ''
  );
}
