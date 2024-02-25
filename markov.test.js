// const { describe } = require("yargs");
const { MarkovMachine } = require("./markov");
// const { default: test } = require("node:test");
// const { exportAllDeclaration } = require("@babel/types");


describe("MarkovMachine - 0", function () {
    let mm = new MarkovMachine("");

    test("to Be Array", function () {
        expect(mm.words).toBeInstanceOf(Array);
    });

    test("to Be Object", function () {
        expect(mm.makeChains()).toBeInstanceOf(Object);
    });

    test("empty Array", function () {
        expect(mm.words.length).toEqual(0);
    });

    test("empty Object", function () {
        expect(Object.keys(mm.makeChains()).length).toEqual(0);
    });
});

describe("MarkovMachine - 1", function () {
    let mm = new MarkovMachine("the cat in the hat");

    test("Array contains", function () {
        expect(mm.words).toContain("the");
    });

    test("Object contains", function () {
        expect(mm.makeChains()["the"]).toEqual(["cat", "hat"]);
    });

    test("Array length", function () {
        expect(mm.words.length).toEqual(5);
    });

    test("Object length", function () {
        expect(Object.keys(mm.makeChains()).length).toEqual(4);
    });

    test("MakeText", function () {
        expect(mm.makeText()).toEqual(expect.any(String));
    });
});