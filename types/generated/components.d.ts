import type { Schema, Struct } from '@strapi/strapi';

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    description: '';
    displayName: 'experience';
    icon: 'check';
  };
  attributes: {
    company: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    end_date: Schema.Attribute.Date;
    role: Schema.Attribute.String;
    start_date: Schema.Attribute.Date & Schema.Attribute.Required;
  };
}

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
    icon: 'bulletList';
  };
  attributes: {
    client: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.String;
    link: Schema.Attribute.Component<'links.links', true>;
    project_name: Schema.Attribute.String;
    tag: Schema.Attribute.Component<'tags.tag', true>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface ProjectProjectsContainer extends Struct.ComponentSchema {
  collectionName: 'components_project_projects_containers';
  info: {
    description: '';
    displayName: 'projects';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    projects: Schema.Attribute.Component<'project.project', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    description: '';
    displayName: 'section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.String;
    links: Schema.Attribute.Component<'links.links', true>;
    section_name: Schema.Attribute.String;
    sub_heading: Schema.Attribute.String;
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
      'experience.experience': ExperienceExperience;
      'links.links': LinksLinks;
      'project.project': ProjectProject;
      'project.projects-container': ProjectProjectsContainer;
      'sections.section': SectionsSection;
      'tags.tag': TagsTag;
    }
  }
}
