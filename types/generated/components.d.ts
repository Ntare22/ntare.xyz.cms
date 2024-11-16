import type { Schema, Struct } from '@strapi/strapi';

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    link_name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'project';
    icon: 'archive';
  };
  attributes: {
    client: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    github_link: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    image: Schema.Attribute.String;
    projects: Schema.Attribute.Component<'project.project', true>;
    socials: Schema.Attribute.Component<'links.links', true>;
    sub_heading: Schema.Attribute.Text;
    tags: Schema.Attribute.Component<'tags.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface TagsTag extends Struct.ComponentSchema {
  collectionName: 'components_tags_tags';
  info: {
    displayName: 'tag';
    icon: 'dashboard';
  };
  attributes: {
    tag_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links.links': LinksLinks;
      'project.project': ProjectProject;
      'section.section': SectionSection;
      'tags.tag': TagsTag;
    }
  }
}
