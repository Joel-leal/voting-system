import { CreateResultPage } from '@packages/entities/notion';

export function createResultPage({
  databaseId,
  electionName,
  electionId,
  winnerParty,
  looserParty,
}: CreateResultPage) {
  const winningMemberBlocks = winnerParty.members.map((member_name) =>
    createCandidateBlocks(member_name),
  );
  const looserMemberBlocks = looserParty.members.map((member_name) =>
    createCandidateBlocks(member_name),
  );

  return {
    parent: {
      type: 'database_id',
      database_id: `${databaseId}`,
    },
    icon: {
      type: 'emoji',
      emoji: '✔️',
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: `Resultado - ${electionName}`,
            },
          },
        ],
      },
      Eleições: {
        type: 'relation',
        relation: [{ id: `${electionId}` }],
      },
    },
    children: [
      {
        object: 'block',
        type: 'heading_1',
        heading_1: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: `Partido Vencedor - ${winnerParty.name}`,
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
            },
          ],
          color: 'default',
        },
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Candidatos vencedores:',
                link: null,
              },
            },
          ],
          color: 'default',
        },
      },
      ...winningMemberBlocks,
      {
        object: 'block',
        type: 'divider',
        divider: {},
      },
      {
        object: 'block',
        type: 'heading_1',
        heading_1: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: `Segundo colocado - ${looserParty.name}`,
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
            },
          ],
          color: 'default',
        },
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: 'Candidatos:',
                link: null,
              },
            },
          ],
          color: 'default',
        },
      },
      ...looserMemberBlocks,
    ],
  };
}

const createCandidateBlocks = (candidate_name: string) => ({
  type: 'bulleted_list_item',
  bulleted_list_item: {
    rich_text: [
      {
        type: 'text',
        text: {
          content: `${candidate_name}`,
        },
      },
    ],
  },
});
