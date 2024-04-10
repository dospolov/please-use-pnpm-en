# please-use-pnpm

> Force using pnpm in the project

When using `npm i` or `pnpm` to install the package, an error will be thrown and the installation will stop.

## Usage

Update `package.json`:

```bash
{
    "scripts": {
        "preinstall": "npx please-use-pnpm"
    }
}
```

![](./screen.png)

**Note**: If you don’t want to see `npx: 1 installed successfully, took xxxx seconds`, you can use the `--quiet` option (or `-q`):

```json
{
  "scripts": {
    "preinstall": "npx -q please-use-pnpm"
  }
}
```

## License

[MIT](LICENSE)
