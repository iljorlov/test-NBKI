import formatFloatTo2Precision from "@/helpers/formatFloatTo2Precision";

describe("formatFloatTo2Precision", () => {
  it("correctly formats a float to .00 precizion with ceiling", () => {
    expect(formatFloatTo2Precision(5)).toBe("5.00");
    expect(formatFloatTo2Precision(0)).toBe("0.00");
    expect(formatFloatTo2Precision(5.5)).toBe("5.50");
    expect(formatFloatTo2Precision(5.59)).toBe("5.59");
    expect(formatFloatTo2Precision(5.9999)).toBe("6.00");
  });
});
