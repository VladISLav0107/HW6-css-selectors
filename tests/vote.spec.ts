import { test, expect } from '@playwright/test';

 function getVotingMessage(age: number) {

    if ( age >= 18 ) {
        return "Ви можете голосувати.";
    } else {
        return "Ви ще не можете голосувати.";
    }
 }

test ('Age 10 (under 18): voting is not allowed', async () => {
    expect(getVotingMessage(10)).toBe("Ви ще не можете голосувати.");
});

test ('Age 17 (under 18): voting is not allowed', async () => {
    expect(getVotingMessage(17)).toBe("Ви ще не можете голосувати.");
});

test ('Age 18 (boundary value): voting is allowed', async () => {
    expect(getVotingMessage(18)).toBe("Ви можете голосувати.");
});

test ('Age 19 (boundary value): voting is allowed', async () => {
    expect(getVotingMessage(19)).toBe("Ви можете голосувати.");
});

test ('Age 25 (adult): voting is allowed', async () => {
    expect(getVotingMessage(25)).toBe("Ви можете голосувати.");
});