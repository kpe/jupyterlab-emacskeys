# jupyterlab-emacskeys

[![npm version](https://badge.fury.io/js/jupyterlab-emacskeys.svg)](https://www.npmjs.com/package/jupyterlab-emacskeys)
[![Build Status](https://travis-ci.org/kpe/jupyterlab-emacskeys.svg?branch=master)](https://travis-ci.org/kpe/jupyterlab-emacskeys.svg?branch=master)
[![npm downloads](https://img.shields.io/npm/dw/jupyterlab-emacskeys.svg)](https://www.npmjs.com/package/jupyterlab-emacskeys)

Currently JupyterLab seems to support emacs keybindings only in its text editor,
but not in the notebook cells. This ~~might be simply a~~ bug (actually it seems to be intentional - see [#3885](https://github.com/jupyterlab/jupyterlab/issues/3885#issuecomment-412294469)), as changing the
default config in codemirror would help, but until it is fixed, I'm using this
method of changing the default keymap in codemirror to `emacs`. 

## Origin

I was badly missing the emacs keybindings support in the notebook cells
in the current version of [JupyterLab](https://github.com/jupyterlab/jupyterlab
), and as I was not familiar with
the jupyter development environment, I've just forked the [jwkvam/jupyterlab-vim](https://github.com/jwkvam/jupyterlab-vim) repo and adapted it to simply use `keyMap=emacs` in codemirror.



## Install
### Prerequisites

* JupyterLab 1.0.1


### Install or upgrade

```bash
jupyter labextension install jupyterlab-emacskeys
```

### Tweaks

Because some common emacs keybindings are already reserved 
in jupyter-lab, you will have to disable them like this (see issue #1), i.e.:


    {
    
	    "shortcuts": [
	        {
	            "command": "application:toggle-left-area",
	            "keys": [
	                "Accel B"
	            ],
	            "selector": "body",
	            "disabled": true
	        },
	        {
	            "command": "application:close",
	            "keys": [
	                "Alt W"
	            ],
	            "selector": ".jp-Activity",
	            "disabled": true
	        },
	        {
	            "command": "notebook:split-cell-at-cursor",
	            "keys": [
	                "Ctrl Shift -"
	            ],
	            "selector": ".jp-Notebook.jp-mod-editMode",
	            "disabled": true
	        },
	        {
	            "command": "apputils:print",
	            "keys":["Accel P"],
	            "selector": "body",
	            "disabled": true
	        },
	        {
	            "command": "documentsearch:start",
	            "keys": [
	                "Accel F"
	            ],
	            "selector": ".jp-mod-searchable",
	            "disabled": true
	        },
	    ]
    }


And because Chrome or Firefox tend to capture some shortcuts, it might help
setting the Emacs key-theme for all GTK applications like this:

    gsettings set org.gnome.desktop.interface gtk-key-theme "Emacs"

or by editing `~/.config/gtk-3.0/settings.ini` like this:

    [Settings]
    gtk-key-theme-name = Emacs


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
