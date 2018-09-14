# jupyterlab-emacskeys

[![npm version](https://badge.fury.io/js/jupyterlab-emacskeys.svg)](https://www.npmjs.com/package/jupyterlab-emacskeys)
[![Build Status](https://travis-ci.org/kpe/jupyterlab-emacskeys.svg?branch=master)](https://travis-ci.org/kpe/jupyterlab-emacskeys.svg?branch=master)
[![npm downloads](https://img.shields.io/npm/dw/jupyterlab-emacskeys.svg)](https://www.npmjs.com/package/jupyterlab-emacskeys)

Currently JupyterLab seems to support emacs keybindings only in its text editor,
but not in the notebook cells. This might be simply a bug, as changing the
default config in codemirror would help, but until it is fixed, I'm using this
method of changing the default keymap in codemirror to `emacs`.

## Origin

I was badly missing the emacs keybindings support in the notebook cells
in the current version of [JupyterLab](https://github.com/jupyterlab/jupyterlab
), and as I was not familiar with
the jupyter development environment, I've just forked the [jwkvam/jupyterlab-vim](https://github.com/jwkvam/jupyterlab-vim) repo and adapted it to simply use `keyMap=emacs` in codemirror.



## Install
### Prerequisites

* JupyterLab 0.33

### Install or upgrade

```bash
jupyter labextension install jupyterlab-emacskeys
```

### Uninstall

```bash
jupyter labextension uninstall jupyterlab-emacskeys
```

### Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
