import { z } from 'zod';

export const BibEntryScalarFieldEnumSchema = z.enum(['id','BibId','OwnWork','ColleaguesWork','read','htmlCitation','PdfPath','address','annote','author','booktitle','chapter','crossref','doi','edition','editor','email','howpublished','institution','journal','month','note','number','organization','pages','publisher','school','series','title','volume','type','year','numpages','url','issue','issn','abstract','urldate','keywords','copyright','createdAt','lastAccess']);

export default BibEntryScalarFieldEnumSchema;
