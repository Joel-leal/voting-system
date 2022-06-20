export type Party = {
  name: string;
  members: string[];
};

export interface ICreateResultPage {
  database_id: string;
  election_name: string;
  election_id: string;
  winner_party: Party;
  looser_party: Party;
}

const cadidateTemplate = (candidate_name: string) => ({
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

export function createResultPage({
  database_id,
  election_name,
  election_id,
  winner_party,
  looser_party,
}: ICreateResultPage) {
  const winning_members = winner_party.members.map((member_name) =>
    cadidateTemplate(member_name),
  );
  const looser_members = looser_party.members.map((member_name) =>
    cadidateTemplate(member_name),
  );

  return {
    parent: {
      type: 'database_id',
      database_id: `${database_id}`,
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
              content: `Resultado - ${election_name}`,
            },
          },
        ],
      },
      Eleições: {
        type: 'relation',
        relation: [{ id: `${election_id}` }],
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
                content: `Partido Vencedor - ${winner_party.name}`,
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
      ...winning_members,
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
                content: `Segundo colocado - ${looser_party.name}`,
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
      ...looser_members,
    ],
  };
}
