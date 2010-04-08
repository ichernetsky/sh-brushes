/* sh-brushes  Brushes for SyntaxHighlighter
 * Copyright (C) 2009  Ivan Chernetsky
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

SyntaxHighlighter.brushes.CL = function () {
  var keywords = 'defgeneric defmacro defmethod defsetf define-condition ' +
    'define-method-combination define-setf-expander define-compiler-macro ' +
    'define-modify-macro define-symbol-macro defconstant defvar defclass ' +
    'defpackage defstruct deftype setf cond eval eval-when inline if lambda ' +
    'let let* prog prog1 prog2 progn progv unwind-protect while block break ' +
    'case ecase typecase declare declaim destructuring-bind do dolist dotimes ' +
    'etypecase flet go handler-bind handler-case ignore-errors in-package ' +
    'labels locally loop macrolet multiple-value-bind multiple-value-prog1 ' +
    'proclaim restart-bind restart-case symbol-macrolet tagbody unless when ' +
    'with-accessors with-compilation-unit with-condition-restarts ' +
    'with-hash-table-iterator with-input-from-string with-open-file ' +
    'with-open-stream with-output-to-string with-package-iterator ' +
    'with-simple-restart with-slots with-standard-io-syntax catch throw ' +
    'provide require t nil defun defvar defparameter';
  var errorKeywords = 'abort assert warn check-type cerror error signal';

  var beforeSymbol = '(?:^|\\(|\\s+)';
  var symbolRegex = '(?:&amp;|&lt;|&gt;|[-\\w\\d/<>\\=\\?\\*\\+%&]){3,}';

  this.regexList = [
    // keyword symbols
    { regex: new RegExp(beforeSymbol + '\\:' + symbolRegex, 'g'),         css: 'functions' },
    // lambda list keywords
    { regex: new RegExp(beforeSymbol + '(?:&amp;|&)' + symbolRegex, 'g'), css: 'value' },
    // quoted symbols
    { regex: new RegExp(beforeSymbol + "'" + symbolRegex, 'g'),           css: 'variable' },
    // constants
    { regex: new RegExp(beforeSymbol + '\\+' + symbolRegex, 'g'),         css: 'constants' },
    // global variables
    { regex: new RegExp(beforeSymbol + '\\*' + symbolRegex, 'g'),         css: 'constants bold' },
    // comments
    { regex: new RegExp('(?:^|\\(|\\)|\\s);.*', 'g'),                     css: 'comments' },
    // strings
    { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,      css: 'string' },
    // keywords
    { regex: new RegExp(this.getKeywords(keywords), 'g'),                 css: 'keyword' },
    // functions related to signals
    { regex: new RegExp(this.getKeywords(errorKeywords), 'g'),            css: 'color3' }
  ];
};

SyntaxHighlighter.brushes.CL.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CL.aliases = ['cl'];
