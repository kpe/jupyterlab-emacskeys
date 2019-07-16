
import {
    JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
    INotebookTracker
} from '@jupyterlab/notebook';


import {
    CodeMirrorEditor
} from '@jupyterlab/codemirror';


import '../style/index.css';

import 'codemirror/keymap/emacs.js';

/**
 * Initialization data for the jupyterlab_vim extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
    id: 'jupyterlab-emacskeys',
    autoStart: true,
    activate: activateCellEmacs,
    requires: [INotebookTracker]
};

class EmacsCell {

    constructor(app: JupyterFrontEnd, tracker: INotebookTracker) {
        this._tracker = tracker;
        this._onActiveCellChanged();
        this._tracker.activeCellChanged.connect(this._onActiveCellChanged, this);
    }

    private _onActiveCellChanged(): void {
        let activeCell = this._tracker.activeCell;
        if (activeCell !== null) {
            let editor = activeCell.editor as CodeMirrorEditor;
            editor.setOption('keyMap', 'emacs');
            editor.setOption('extraKeys', {
                'Ctrl-/': 'undo',
                'Ctrl-Shift--': 'undo'
            });
        }
    }

    private _tracker: INotebookTracker;
}

function activateCellEmacs(app: JupyterFrontEnd, tracker: INotebookTracker): Promise<void> {

    Promise.all([app.restored]).then(([args]) => {
        // tslint:disable:no-unused-expression
        new EmacsCell(app, tracker);
    });

    return Promise.resolve();
}

export default extension;
