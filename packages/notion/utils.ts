import {
  Title,
  LooseObject,
  Result,
  RichText,
  Select,
} from '@packages/notion/sdk';

export function extractPagesFromQuery(pages: Result[]) {
  const extractedPages = pages.map((page) => {
    const pageProperties = _extractProperties(page);
    return {
      electionId: page?.id,
      electionName: pageProperties?.Name,
      partySlug: pageProperties?.Sigla,
      candidateName: pageProperties?.Candidato,
      viceCandidateName: pageProperties?.Vice,
      code: pageProperties?.Codigo,
    };
  });

  return extractedPages;
}

function _extractProperties(result: Result): LooseObject {
  let parsedResults: LooseObject = {};

  if ('properties' in result) {
    const { properties } = result;
    Object.entries(properties).map(([key, value]) => {
      switch (value.type) {
        case 'title':
          parsedResults[key] = _titleHandler(value);
          break;
        case 'select':
          parsedResults[key] = _selectHandler(value);
          break;
        case 'rich_text':
          parsedResults[key] = _richTextHandler(value);
      }
    });
  }

  return parsedResults;
}

function _titleHandler(propertyValue: Title): string {
  return propertyValue.title[0].plain_text;
}

function _richTextHandler(propertyValue: RichText): string {
  return propertyValue.rich_text[0].plain_text;
}

function _selectHandler(propertyValue: Select): string {
  if (propertyValue?.select) {
    return propertyValue.select.name;
  }
  return '';
}
