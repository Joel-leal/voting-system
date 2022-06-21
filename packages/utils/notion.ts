import { Title, LooseObject, Result } from '@packages/entities/notion-sdk';

export function extractValues(result: Result): LooseObject {
  let parsedResults: LooseObject = {};

  if ('properties' in result) {
    const { properties } = result;
    Object.entries(properties).map(([key, value]) => {
      if (!key) return false;
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
