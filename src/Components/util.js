const calculateHeight = (id, setTitleContainerHeight) => {
  const titleContainers = document.querySelectorAll(id);
  let maxHeight = 0;

  titleContainers.forEach((container) => {
    const containerHeight = container.clientHeight;
    maxHeight = Math.max(maxHeight, containerHeight);
  });

  setTitleContainerHeight(maxHeight);
};
export { calculateHeight };
