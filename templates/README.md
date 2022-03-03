# **mokshajs**

=======================================================================

> **A bare minimum automation framework that can be used as a starter kit.**

Compatible with default terminals on:

- Linux
- Mac
- Windows

### **Usage**

=======================================================================

> The Entry Point

        cd e2e/src

---

        npm install -g pm2

---

        npm install

##### **Begin**

=======================================================================

> The key command (this command will start the standalone selenium grid as a background process)

        pm2 start ecosystem.config.js

##### Wait!

=======================================================================

> What did I just do?
> open your favourite browser and head over to 'http://localhost:4444'

### **_Well! If you reached this far, you are all set to ignite the tests._**

##### Continue

=======================================================================

> To execute the sample tests

        npm test

##### Sneak Peek

=======================================================================

> Bravo! the execution completed

        logs are here "src/logs"
        reports are here "src/reports"

##### Relax

=======================================================================

> Bored with repeated tests (stop the standalone selenium grid background process)

        pm2 stop ecosystem.config.js

##### End

=======================================================================

> Call it a Day!

        pm2 delete ecosystem.config.js
