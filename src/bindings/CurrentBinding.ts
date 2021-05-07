import { IKeyBinding } from '../KeyboardShortcuts';

// Copy your custom keybindings json here
export const CurrentBinding: IKeyBinding[] = [
	{
		"key": "shift+delete",
		"command": "-editor.action.clipboardCutAction",
		"when": "editorTextFocus && !editorReadonly"
	},
	{
		"key": "shift+delete",
		"command": "editor.action.deleteLines",
		"when": "editorTextFocus && !editorReadonly"
	},
	{
		"key": "ctrl+shift+k",
		"command": "-editor.action.deleteLines",
		"when": "editorTextFocus && !editorReadonly"
	},
	{
		"key": "shift+alt+f",
		"command": "-editor.action.formatDocument",
		"when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly"
	},
	{
		"key": "ctrl+u",
		"command": "-cursorUndo",
		"when": "editorTextFocus"
	},
	{
		"key": "ctrl+shift+a",
		"command": "workbench.files.action.showActiveFileInExplorer",
		"when": "editorTextFocus && editorLangId != 'todo'"
	},
	{
		"key": "ctrl+shift+a",
		"command": "workbench.view.explorer",
		"when": "!editorTextFocus"
	},
	{
		"key": "ctrl+k ctrl+d",
		"command": "-editor.action.moveSelectionToNextFindMatch",
		"when": "editorFocus"
	},
	{
		"key": "ctrl+t",
		"command": "-workbench.action.showAllSymbols"
	},
	{
		"key": "ctrl+t",
		"command": "workbench.action.tasks.runTask"
	},
	{
		"key": "alt+oem_period",
		"command": "-gitlens.diffWithNext",
		"when": "editorTextFocus && gitlens:isTracked"
	},
	{
		"key": "ctrl+alt+o",
		"command": "workbench.action.showAllSymbols"
	},
	{
		"key": "alt+/",
		"command": "-gitlens.showCommitSearch",
		"when": "gitlens:enabled"
	},
	{
		"key": "alt+/",
		"command": "closeTag.closeHTMLTag",
		"when": "editorTextFocus"
	},
	{
		"key": "alt+.",
		"command": "-closeTag.closeHTMLTag",
		"when": "editorTextFocus"
	},
	{
		"key": "shift+alt+.",
		"command": "-closeTag.closeHTMLTagInPlace",
		"when": "editorTextFocus"
	},
	{
		"key": "shift+alt+c",
		"command": "-copyFilePath",
		"when": "explorerViewletFocus && explorerViewletVisible"
	},
	{
		"key": "shift+alt+r",
		"command": "-vstortoise.svnRevert"
	},
	{
		"key": "shift+alt+d",
		"command": "-vstortoise.svnDiff"
	},
	{
		"key": "shift+alt+d",
		"command": "-vstortoise.svnDiff"
	},
	{
		"key": "shift+alt+b",
		"command": "-gitlens.toggleCodeLens",
		"when": "editorTextFocus && gitlens:activeIsTracked && gitlens:canToggleCodeLens"
	},
	{
		"key": "shift+alt+b",
		"command": "vstortoise.svnBlame"
	},
	{
		"key": "shift+alt+u",
		"command": "-vstortoise.svnUpdate"
	},
	{
		"key": "shift+alt+u",
		"command": "-vstortoise.svnUpdate"
	},
	{
		"key": "alt+s",
		"command": "-gitlens.showQuickRepoStatus",
		"when": "gitlens:enabled && gitlens:keymap == 'standard'"
	},
	{
		"key": "ctrl+alt+g s",
		"command": "-gitlens.showQuickRepoStatus",
		"when": "gitlens:enabled && gitlens:keymap == 'chorded'"
	},
	{
		"key": "ctrl+e",
		"command": "-workbench.action.quickOpen"
	},
	{
		"key": "ctrl+e",
		"command": "-workbench.action.quickOpenNavigateNextInFilePicker",
		"when": "inFilesPicker && inQuickOpen"
	},
	{
		"key": "ctrl+e",
		"command": "editor.emmet.action.expandAbbreviation",
		"when": "editorTextFocus && !editorReadonly && !editorTabMovesFocus"
	},
	{
		"key": "tab",
		"command": "-editor.emmet.action.expandAbbreviation",
		"when": "config.emmet.triggerExpansionOnTab && editorTextFocus && !editorReadonly && !editorTabMovesFocus"
	},
	{
		"key": "ctrl+shift+i",
		"command": "insertDateString.insertDate"
	},
	{
		"key": "ctrl+shift+i",
		"command": "-insertDateString.insertDateTime",
		"when": "editorTextFocus"
	},
	{
		"key": "ctrl+alt+/",
		"command": "gitlens.showCommitSearch",
		"when": "gitlens:enabled && gitlens:keymap == 'alternate'"
	},
	{
		"key": "alt+/",
		"command": "-gitlens.showCommitSearch",
		"when": "gitlens:enabled && gitlens:keymap == 'alternate'"
	},
	{
		"key": "ctrl+shift+/",
		"command": "editor.action.blockComment",
		"when": "editorTextFocus && !editorReadonly"
	},
	{
		"key": "shift+alt+a",
		"command": "-editor.action.blockComment",
		"when": "editorTextFocus && !editorReadonly"
	},
	{
		"key": "shift+alt+a",
		"command": "workbench.action.files.revealActiveFileInWindows"
	},
	{
		"key": "ctrl+k r",
		"command": "-workbench.action.files.revealActiveFileInWindows"
	},
	{
		"key": "ctrl+shift+alt+left",
		"command": "cursorWordPartLeftSelect"
	},
	{
		"key": "ctrl+shift+alt+right",
		"command": "cursorWordPartRightSelect"
	},
	{
		"key": "ctrl+alt+up",
		"command": "-incrementor.incByTenth"
	},
	{
		"key": "ctrl+alt+down",
		"command": "-incrementor.decByTenth"
	},
	{
		"key": "ctrl+shift+e",
		"command": "-workbench.action.quickOpenNavigatePreviousInFilePicker",
		"when": "inFilesPicker && inQuickOpen"
	},
	{
		"key": "ctrl+shift+e",
		"command": "-workbench.view.explorer"
	},
	{
		"key": "ctrl+shift+e",
		"command": "extension.evaluateAndReplaceSelection"
	},
	{
		"key": "alt+s",
		"command": "-gitlens.showQuickRepoStatus",
		"when": "gitlens:enabled && gitlens:keymap == 'alternate'"
	},
	{
		"key": "alt+c",
		"command": "-gitlens.showQuickCommitFileDetails",
		"when": "editorTextFocus && gitlens:enabled && gitlens:keymap == 'alternate'"
	},
	{
		"key": "ctrl+k ctrl+k",
		"command": "extension.chat.changeChannel"
	},
	{
		"key": "ctrl+shift+s",
		"command": "-workbench.action.files.saveAs"
	},
	{
		"key": "ctrl+shift+s",
		"command": "workbench.action.files.saveWithoutFormatting"
	},
	{
		"key": "ctrl+k ctrl+shift+s",
		"command": "-workbench.action.files.saveWithoutFormatting"
	},
	{
		"key": "ctrl+shift+d",
		"command": "-workbench.view.debug"
	},
	{
		"key": "ctrl+shift+d",
		"command": "cursorUndo",
		"when": "textInputFocus"
	},
	{
		"key": "ctrl+u",
		"command": "-cursorUndo",
		"when": "textInputFocus"
	},
	{
		"key": "ctrl+k ctrl+r",
		"command": "-workbench.action.keybindingsReference"
	},
	{
		"key": "ctrl+k e",
		"command": "workbench.action.closeOtherEditors"
	},
	{
		"key": "ctrl+k r",
		"command": "workbench.action.closeEditorsToTheRight"
	},
	{
		"key": "ctrl+l p",
		"command": "-extension.openPrGitProvider"
	},
	{
		"key": "ctrl+l k",
		"command": "workbench.action.focusAboveGroup"
	},
	{
		"key": "ctrl+k ctrl+up",
		"command": "-workbench.action.focusAboveGroup"
	},
	{
		"key": "ctrl+l j",
		"command": "workbench.action.focusBelowGroup"
	},
	{
		"key": "ctrl+k ctrl+down",
		"command": "-workbench.action.focusBelowGroup"
	},
	{
		"key": "ctrl+l h",
		"command": "workbench.action.focusLeftGroup"
	},
	{
		"key": "ctrl+k ctrl+left",
		"command": "-workbench.action.focusLeftGroup"
	},
	{
		"key": "ctrl+l l",
		"command": "workbench.action.focusRightGroup"
	},
	{
		"key": "ctrl+k ctrl+right",
		"command": "-workbench.action.focusRightGroup"
	},
	{
		"key": "alt+j",
		"command": "editor.action.moveLinesDownAction",
		"when": "editorTextFocus"
	},
	{
		"key": "alt+k",
		"command": "editor.action.moveLinesUpAction",
		"when": "editorTextFocus"
	},
	{
		"key": "alt+shift+j",
		"command": "editor.action.copyLinesDownAction",
		"when": "editorTextFocus"
	},
	{
		"key": "alt+shift+k",
		"command": "editor.action.copyLinesUpAction",
		"when": "editorTextFocus"
	},
	{
		"key": "shift+alt+d",
		"command": "editor.action.smartSelect.grow",
		"when": "editorTextFocus"
	},
	{
		"key": "shift+alt+right",
		"command": "-editor.action.smartSelect.grow",
		"when": "editorTextFocus"
	},
	{
		"key": "ctrl+r",
		"command": "-redo",
		"when": "editorTextFocus && !extension.simpleVim.insertMode"
	},
	{
		"key": "ctrl+f",
		"command": "-extension.simpleVim.scrollDownPage",
		"when": "editorTextFocus && !extension.simpleVim.insertMode"
	},
	{
		"key": "ctrl+d",
		"command": "-extension.simpleVim.scrollDownHalfPage",
		"when": "editorTextFocus && !extension.simpleVim.insertMode"
	},
	{
		"key": "ctrl+b",
		"command": "-extension.simpleVim.scrollUpPage",
		"when": "editorTextFocus && !extension.simpleVim.insertMode"
	},
	{
		"key": "ctrl+u",
		"command": "-extension.simpleVim.scrollUpHalfPage",
		"when": "editorTextFocus && !extension.simpleVim.insertMode"
	},
	{
		"key": "ctrl+k ctrl+v",
		"command": "markdown.showPreviewToSide",
		"when": "editorLangId == 'markdown'"
	},
	{
		"key": "ctrl+k v",
		"command": "-markdown.showPreviewToSide",
		"when": "editorLangId == 'markdown'"
	},
	{
		"key": "ctrl+k v",
		"command": "markdown.showPreview",
		"when": "editorLangId == 'markdown'"
	},
	{
		"key": "ctrl+shift+v",
		"command": "-markdown.showPreview",
		"when": "editorLangId == 'markdown'"
	},
	{
		"key": "ctrl+;",
		"command": "macros.addSemicolon"
	},
	{
		"key": "ctrl+shift+k",
		"command": "-editor.action.deleteLines",
		"when": "textInputFocus && !editorReadonly"
	},
	{
		"key": "ctrl+k k",
		"command": "workbench.action.moveEditorToAboveGroup"
	},
	{
		"key": "ctrl+k j",
		"command": "workbench.action.moveEditorToBelowGroup"
	},
	{
		"key": "ctrl+k h",
		"command": "workbench.action.moveEditorToLeftGroup"
	},
	{
		"key": "ctrl+k l",
		"command": "workbench.action.moveEditorToRightGroup"
	},
	{
		"key": "ctrl+shift+k k",
		"command": "macros.moveEditorUp"
	},
	{
		"key": "ctrl+shift+k j",
		"command": "macros.moveEditorDown"
	},
	{
		"key": "ctrl+shift+k h",
		"command": "macros.moveEditorLeft"
	},
	{
		"key": "ctrl+shift+k l",
		"command": "macros.moveEditorRight"
	},
	{
		"key": "ctrl+shift+k m",
		"command": "workbench.action.minimizeOtherEditors"
	},
	{
		"key": "ctrl+m",
		"command": "-editor.action.toggleTabFocusMode"
	},
	{
		"key": "ctrl+k t",
		"command": "workbench.action.closeActiveEditor"
	},
	{
		"key": "ctrl+k t",
		"command": "workbench.action.closeGroup",
		"when": "activeEditorGroupEmpty && multipleEditorGroups"
	},
	{
		"key": "shift+alt+a",
		"command": "revealFileInOS",
		"when": "!editorFocus"
	},
	{
		"key": "shift+alt+r",
		"command": "-revealFileInOS",
		"when": "!editorFocus"
	},
	{
		"key": "ctrl+shift+numpad_add",
		"command": "editor.action.smartSelect.expand",
		"when": "editorTextFocus"
	},
	{
		"key": "shift+alt+right",
		"command": "-editor.action.smartSelect.expand",
		"when": "editorTextFocus"
	},
	{
		"key": "ctrl+shift+numpad_subtract",
		"command": "editor.action.smartSelect.shrink",
		"when": "editorTextFocus"
	},
	{
		"key": "shift+alt+left",
		"command": "-editor.action.smartSelect.shrink",
		"when": "editorTextFocus"
	},
	{
		"key": "ctrl+k ctrl+g",
		"command": "findThenJump.initiate"
	},
	{
		"key": "ctrl+shift+k ctrl+shift+g",
		"command": "findThenJump.initiateWithSelection"
	},
	{
		"key": "ctrl+win+tab",
		"command": "findWordAtCursor.next"
	},
	{
		"key": "ctrl+shift+win+tab",
		"command": "findWordAtCursor.previous"
	},
	{
		"key": "alt+c",
		"command": "-gitlens.showQuickCommitFileDetails",
		"when": "editorTextFocus && gitlens:enabled && config.gitlens.keymap == 'alternate'"
	},
	{
		"key": "ctrl+shift+v",
		"command": "-markdown.extension.togglePreview",
		"when": "!terminalFocus"
	},
	{
		"key": "ctrl+shift+v",
		"command": "workbench.action.tasks.test"
	},
	{
		"key": "ctrl+alt+left",
		"command": "-workbench.action.moveEditorToPreviousGroup"
	},
	{
		"key": "ctrl+alt+right",
		"command": "-workbench.action.moveEditorToNextGroup"
	},
	{
		"key": "ctrl+alt+left",
		"command": "cursorWordPartLeft"
	},
	{
		"key": "ctrl+alt+right",
		"command": "cursorWordPartRight"
	},
	{
		"key": "ctrl+k ctrl+r",
		"command": "update.showCurrentReleaseNotes"
	},
	{
		"key": "alt+s",
		"command": "-gitlens.showQuickRepoStatus",
		"when": "gitlens:enabled && config.gitlens.keymap == 'alternate'"
	},
	{
		"key": "escape escape",
		"command": "-workbench.action.exitZenMode",
		"when": "inZenMode"
	},
	{
		"key": "ctrl+k ctrl+t",
		"command": "workbench.view.extension.todo-tree-container"
	},
	{
		"key": "ctrl+k ctrl+t",
		"command": "-workbench.action.selectTheme"
	},
	{
		"key": "ctrl+b",
		"command": "-amVim.ctrl+b",
		"when": "amVim.configuration.shouldBindCtrlCommands && editorTextFocus && amVim.mode != 'INSERT'"
	},
	{
		"key": "ctrl+c",
		"command": "-amVim.ctrl+c",
		"when": "amVim.configuration.shouldBindCtrlCommands && editorTextFocus"
	},
	{
		"key": "ctrl+f",
		"command": "-amVim.ctrl+f",
		"when": "amVim.configuration.shouldBindCtrlCommands && editorTextFocus && amVim.mode != 'INSERT'"
	},
	{
		"key": "ctrl+alt+v",
		"command": "multiclip.list"
	},
	{
		"key": "ctrl+tab",
		"command": "workbench.action.terminal.focusNext",
		"when": "terminalFocus"
	},
	{
		"key": "ctrl+shift+tab",
		"command": "workbench.action.terminal.focusPrevious",
		"when": "terminalFocus"
	},
	{
		"key": "cmd+s",
		"command": "searchEditorApplyChanges.apply",
		"when": "inSearchEditor"
	},
	{
		"key": "ctrl+k f",
		"command": "-workbench.action.closeFolder"
	},
	{
		"key": "ctrl+end",
		"command": "-cursorBottom",
		"when": "textInputFocus && editorLangId == 'markdown'"
	},
	{
		"key": "ctrl+end",
		"command": "macros.goToNearEnd",
		"when": "textInputFocus && editorLangId == 'markdown'"
	},
	{
		"key": "ctrl+numpad_multiply",
		"command": "git-graph.view"
	},
	{
		"key": "alt+c",
		"command": "-gitlens.showQuickCommitFileDetails",
		"when": "editorTextFocus && !gitlens:disabled && config.gitlens.keymap == 'alternate'"
	},
	{
		"key": "ctrl+r shift+r",
		"command": "-npm-script.run",
		"when": "!terminalFocus"
	},
	{
		"key": "ctrl+r r",
		"command": "-npm-script.rerun-last-script",
		"when": "!terminalFocus"
	},
	{
		"key": "ctrl+r t",
		"command": "-npm-script.test",
		"when": "!terminalFocus"
	},
	{
		"key": "ctrl+r l",
		"command": "-npm-script.showOutput",
		"when": "!terminalFocus"
	},
	{
		"key": "ctrl+r shift+x",
		"command": "-npm-script.terminate-script",
		"when": "!terminalFocus"
	},
	{
		"key": "ctrl+b",
		"command": "markdown.extension.editing.toggleBold",
		"when": "editorTextFocus && !editorReadonly && editorLangId == 'markdown' && editorHasSelection"
	},
	{
		"key": "ctrl+b",
		"command": "-markdown.extension.editing.toggleBold",
		"when": "editorTextFocus && !editorReadonly && editorLangId == 'markdown'"
	},
	{
		"key": "ctrl+i",
		"command": "markdown.extension.editing.toggleItalic",
		"when": "editorTextFocus && !editorReadonly && editorLangId == 'markdown' && editorHasSelection"
	},
	{
		"key": "ctrl+i",
		"command": "-markdown.extension.editing.toggleItalic",
		"when": "editorTextFocus && !editorReadonly && editorLangId == 'markdown'"
	}
];
