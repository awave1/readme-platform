# readMe backend (API server)

## Project Overview

```bash
├── README.md
├── app.js
├── authUtils.js
├── controllers             # -- Server Controllers
│   └── ...
├── db                      # -- Database connection
│   └── ...
├── models                  # -- Server models
│   └── ...
├── routes                  # -- Server Routes
│   └── ...
├── server.js               # -- Main server file
└── test                    # -- Tests for modules used on server
    ├── controllers
    │   └── ...
    ├── models
    │   └── ...
    └── routes
        └── ...
```

## Setup

1. Install [postgresql](https://www.postgresql.org/download/windows/)
2. Open WSL bash console
3. Run `sudo apt-get install postgresql postgresql-contrib`
4. To start sql console, run `psql -p 5432 -h localhost -U postgres`
