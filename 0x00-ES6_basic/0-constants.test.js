import { taskFirst, taskNext, getLast } from "./0-constants"

test('taskFirst function should return the combined string', () => {
    const result = taskFirst();
    expect(result).toBe("I prefer const when I can.");
})

test('getLast function should return the combined string', () => {
    const result = getLast()
    expect(result).toBe(' is okay');
})

test('taskNext function should return the combined string', () => {
    const result = taskNext();
    expect(result).toBe('But sometimes let is okay')
})
