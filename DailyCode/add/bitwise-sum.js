const sum = (n1, n2) => {
    return n2 == 0 ? n1 : sum(n1 ^ n2, (n1 & n2) << 1);
}