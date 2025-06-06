import { OfferEntity } from '../offer/index.js';
import { UserEntity } from '../user/index.js';
import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public text!: string;

  @prop({required: true})
  public rating!: number;

  @prop({
    ref: 'UserEntity',
    required: true
  })
  public userId?: Ref<UserEntity>;

  @prop({
    ref: 'OfferEntity',
    required: true
  })
  public offerId!: Ref<OfferEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
