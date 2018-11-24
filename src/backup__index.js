import { propsIterator, createMarkdownFile, TEST_ME } from "./core/generator";
// @flow

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const sayHello = (name: string = "Haz"): string => `Hello, ${name}!`;

console.log(TEST_ME);

export default sayHello;
