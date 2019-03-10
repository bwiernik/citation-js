/**
 * @module input/bibtex
 */

import {logger} from '@citation-js/core'

/**
 * Map holding information on BibTeX pub types.
 *
 *  * If string, use as CSL type
 *  * If false, type is known but has no (good) mapping
 *
 * @access private
 * @constant typeMap
 * @default
 */
const typeMap = {
  article: 'article-journal',
  book: 'book',
  booklet: 'book',
  proceedings: 'book',
  manual: false,
  mastersthesis: 'thesis',
  misc: false,
  inbook: 'chapter',
  incollection: 'chapter',
  conference: 'paper-conference',
  inproceedings: 'paper-conference',
  online: 'website',
  patent: 'patent',
  phdthesis: 'thesis',
  techreport: 'report',
  unpublished: 'manuscript'
}

/**
 * BibTeX pub type to CSL pub type. Defaults to 'book'.
 *
 * @access protected
 * @method parseBibTeXType
 *
 * @param {String} pubType - BibTeX type
 *
 * @return {String} CSL type
 */
const parseBibTeXType = function (pubType) {
  if (!typeMap.hasOwnProperty(pubType)) {
    logger.unmapped('[plugin-bibtex]', 'publication type', pubType)
    return 'book'
  } else if (typeMap[pubType] === false) {
    return 'book'
  } else {
    return typeMap[pubType]
  }
}

export {
  parseBibTeXType as parse,
  parseBibTeXType as default
}
