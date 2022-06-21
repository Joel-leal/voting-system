import { Title, LooseObject, Result } from '@packages/entities/notion-sdk';

export function extractPagesFromQuery(pages: Result[]) {
  const extractedPages = pages.map((page) => {
    const pageProperties = _extractProperties(page);
    return {
      electionId: page.id,
      electionName: pageProperties.Name,
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
      }
    });
  }

  return parsedResults;
}

function _titleHandler(propertyValue: Title): string {
  return propertyValue.title[0].plain_text;
}
