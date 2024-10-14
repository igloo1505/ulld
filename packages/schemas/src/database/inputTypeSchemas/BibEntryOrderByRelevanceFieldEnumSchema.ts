import { z } from 'zod';

export const BibEntryOrderByRelevanceFieldEnumSchema = z.enum(['id','htmlCitation','PdfPath','address','annote','author','booktitle','chapter','crossref','doi','edition','editor','email','howpublished','institution','journal','month','note','number','organization','pages','publisher','school','series','title','volume','type','year','numpages','url','issue','issn','abstract','urldate','keywords','copyright']);

export default BibEntryOrderByRelevanceFieldEnumSchema;
