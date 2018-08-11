# jupyterlab-emacskeys

Currently JupyterLab seems to support emacs keybindings only in its text editor,
but not in the notebook cells. This might be a simply a bug, as changing the
default config in codemirror helps, but until it is fixed, I'm using this
method of changing the default keymap in codemirror.

## Origin

I was badly missing the emacs keybindings support in the notebook cells
in the current version of jupyterlab, and I was not familiar with
the jupyter development infrastructure, I've just forked the [jwkvam/jupyterlab-vim](https://github.com/jwkvam/jupyterlab-vim) repo and adapted it to simply set the `keyMap=emacs` in codemirror.



## Install
### Prerequisites

* JupyterLab 0.33

### Install or upgrade

```bash
jupyter labextension install jupyterlab_vim
```

### Uninstall

```bash
jupyter labextension uninstall jupyterlab_vim
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
