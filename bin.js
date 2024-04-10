#!/usr/bin/env node
if (!/pnpm\.js$|pnpmpkg$/.test(process.env)) {
    console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
    console.error(`\x1B[1;31m* npm and yarn are forbidden.\x1B[0;0m`);
    console.error(`\x1B[1;31m* Only pnpm allowed in this project\x1B[0;0m`);
    console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
    console.error(``);
    process.exit(1);
}