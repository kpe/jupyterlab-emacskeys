
import {
    JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
    INotebookTracker
} from '@jupyterlab/notebook';


import {
    CodeMirrorEditor
} from '@jupyterlab/codemirror';


import '../style/index.css';

/**
 * Initialization data for the jupyterlab_vim extension.
 */
const extension: JupyterLabPlugin<void> = {
    id: 'jupyterlab-emacskeys',
    autoStart: true,
    activate: activateCellEmacs,
    requires: [INotebookTracker]
};

class EmacsCell {

    constructor(app: JupyterLab, tracker: INotebookTracker) {
        this._tracker = tracker;
        this._onActiveCellChanged();
        this._tracker.activeCellChanged.connect(this._onActiveCellChanged, this);
    }

    private _onActiveCellChanged(): void {
        let activeCell = this._tracker.activeCell;
        if (activeCell !== null) {
            let editor = activeCell.editor as CodeMirrorEditor;
            editor.setOption('keyMap', 'emacs');
        }
    }

    private _tracker: INotebookTracker;
}

function activateCellEmacs(app: JupyterLab, tracker: INotebookTracker): Promise<void> {

    Promise.all([app.restored]).then(([args]) => {
        // tslint:disable:no-unused-expression
        new EmacsCell(app, tracker);
    });

    return Promise.resolve();
}

export default extension;
