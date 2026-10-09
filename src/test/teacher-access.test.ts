import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";

const html = readFileSync("public/simulasi.html", "utf8");
const constants = html.match(/const PASSCODES = \{[\s\S]*?\};/)?.[0];
const handler = html.match(/function submitPasscode\(\) \{[\s\S]*?\n    \}/)?.[0];

function attempt(input: string) {
  if (!constants || !handler) throw new Error("Access handler missing");
  const navigations: string[] = [];
  runInNewContext(`${constants}\nlet passcodeTargetRole = 'guru';\n${handler}\nsubmitPasscode();`, {
    document: { getElementById: () => ({ value: input }) },
    closeModal: () => {},
    showToast: () => {},
    navigateTo: (role: string) => navigations.push(role),
  });
  return navigations;
}

describe("Teacher access", () => {
  it("accepts the replacement teacher code", () => {
    expect(attempt("suksestka")).toEqual(["guru"]);
  });
  it("rejects the previous teacher code", () => {
    expect(attempt("zulsdn4")).toEqual([]);
  });
});