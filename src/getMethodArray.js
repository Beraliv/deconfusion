const RIGHT_BEFORE_ARRAY_CHUNK = "}.call(this, [";

const getModuleEndIndex = (source) => {
  const rightBeforeArrayChunkIndex = source.lastIndexOf(
    RIGHT_BEFORE_ARRAY_CHUNK
  );

  return rightBeforeArrayChunkIndex;
};

const getMethodArrayStartIndex = (source) => {
  const rightBeforeArrayChunkIndex = getModuleEndIndex(source);

  const arrayStartIndex =
    rightBeforeArrayChunkIndex + RIGHT_BEFORE_ARRAY_CHUNK.length - 1;

  return arrayStartIndex;
};

const getMethodArrayWithQuotas = (source) => {
  const arrayStartIndex = getMethodArrayStartIndex(source);
  const arrayEndIndex = source.lastIndexOf("]");

  const arrayString = source.slice(arrayStartIndex, arrayEndIndex + 1);

  const array = arrayString
    .split("\n")
    .map((line) => {
      let end = line.length - 1;

      if (line[end] === ",") {
        end--;
      }

      const quote = line[end];
      const start = line.indexOf(quote);

      return line.slice(start, end + 1);
    })
    .slice(1, -1);

  return array;
};

const getMethodArray = (source) => {
  const arrayWithQuolas = getMethodArrayWithQuotas(source);

  const arrayWithoutQuolas = arrayWithQuolas.map((value) => value.slice(1, -1));

  return arrayWithoutQuolas;
};

module.exports = {
  getMethodArray,
  getMethodArrayWithQuotas,
  getMethodArrayStartIndex,
  getModuleEndIndex,
};
