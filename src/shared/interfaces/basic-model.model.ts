import { AbstractModel } from './abstract-model.model';

export interface BasicModel extends AbstractModel {
  name: string;
  slug: string;
  description: string;
}
