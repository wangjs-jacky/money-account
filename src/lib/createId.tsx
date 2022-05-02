let count = 0;
export const createId = () => {
    count++;
    return count.toString();
};
