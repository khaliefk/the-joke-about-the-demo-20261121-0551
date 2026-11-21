# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/khaliefk/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/khaliefk/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

A program that writes one joke about working beside AI coding agents. The joke is about a demo: the agent fixes the crash live on stage, the room applauds, and the app has been down ever since.

> My coding agent fixed the crash live on stage. The room applauded. The app has been down ever since.

## Run

```sh
node main.ts
```

This writes the joke to `/output/entry.txt` (UTF-8, 101 Unicode code points). No network, no dependencies. Node 22 or later.

To write somewhere else for a local check:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

The program checks the joke is 1 to 280 code points before it writes, and stops with an error if it is not.

## License

MIT. See [LICENSE](LICENSE).
