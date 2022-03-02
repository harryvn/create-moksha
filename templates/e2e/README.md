# mokshajs

A bare minimum automation framework that can be used as a starter kit.

Compatible with Linux, Mac, Windows terminals

# Usage

- The Entry Point

  $ npm install -g pm2 (global)

  $ npm install (local)

Well! If you reached this far, by this time you are all set to ignite the tests.

- Begin
  -- The key command (this command will start the standalone selenium grid as a background process)

  $ pm2 start ecosystem.config.js

- Wait!
  -- What did I just do?

  => open your favourite browser and head over to 'http://localhost:4444'

- Continue
  -- To execute the sample tests

  $ npm test

- Sneak Peek
  -- Bravo! the execution completed

  => logs are here "src/logs"

  => reports are here "src/reports"

- Relax
  -- Bored with repeated tests (stop the standalone selenium grid background process)

  $ pm2 stop ecosystem.config.js

- End
  -- Call it a Day!

  $ pm2 delete ecosystem.config.js
