// @flow

type MaybeString = ?string;
type MaybeNumber = ?number;
type MaybeAny = MaybeString | MaybeNumber;

export type Product = {
  _id?: MaybeString,
  _keywords?: Array<MaybeString>,

  sortkey?: MaybeNumber,
  created_t?: MaybeNumber,
  last_editor?: ?MaybeString,
  last_image_t?: MaybeNumber,
  last_modified_t?: MaybeNumber,
  last_modified_by?: MaybeString,
  last_edit_dates_tags?: Array<MaybeString>,
  last_image_dates_tags?: Array<MaybeString>,

  id?: MaybeString,
  url?: MaybeString,
  rev?: MaybeNumber,
  code?: MaybeString,
  link?: MaybeString,
  creator?: MaybeString,
  quantity?: MaybeString,

  product_name?: MaybeString,
  generic_name?: MaybeString,

  image_url?: MaybeString,
  image_small_url?: MaybeString,
  image_thumb_url?: MaybeString,
  image_front_url?: MaybeString,
  image_front_small_url?: MaybeString,
  image_front_thumb_url?: MaybeString,
  image_ingredients_url?: MaybeString,
  image_ingredients_thumb_url?: MaybeString,
  image_ingredients_small_url?: MaybeString,
  images?: {
    [string]: {
      uploader?: MaybeString,
      uploaded_t?: MaybeAny,

      y1?: MaybeAny,
      y2?: MaybeAny,
      x1?: MaybeAny,
      x2?: MaybeAny,
      angle?: MaybeAny,

      white_magic?: MaybeString,
      normalize?: MaybeString,
      rev?: MaybeString,
      imgid?: MaybeString,
      geometry?: MaybeString,

      sizes?: {
        [string]: {
          h?: MaybeAny,
          w?: MaybeAny
        }
      }
    }
  },
  selected_images?: {
    [string]: {
      [string]: {[string]: MaybeString}
    }
  },

  additives_tags?: Array<MaybeString>,
  additives_old_tags?: Array<MaybeString>,
  additives_prev_tags?: Array<MaybeString>,
  additives_prev_original_tags?: Array<MaybeString>,
  additives_debug_tags?: Array<MaybeString>,
  additives_original_tags?: Array<MaybeString>,

  allergens?: MaybeString,
  allergens_tags?: Array<MaybeString>,
  allergens_hierarchy?: Array<MaybeString>,

  amino_acids_tags?: Array<MaybeString>,
  amino_acids_prev_tags?: Array<MaybeString>,

  brands?: MaybeString,
  brands_tags?: Array<MaybeString>,

  codes_tags?: Array<MaybeAny>,

  stores?: MaybeString,
  stores_tags?: Array<MaybeString>,

  cities_tags?: Array<MaybeString>,

  countries?: MaybeString,
  countries_tags?: Array<MaybeString>,
  countries_hierarchy?: Array<MaybeString>,
  countries_debug_tags?: Array<MaybeString>,

  categories?: MaybeString,
  categories_tags?: Array<MaybeString>,
  categories_prev_tags?: Array<MaybeString>,
  categories_debug_tags?: Array<MaybeString>,
  categories_hierarchy?: Array<MaybeString>,
  categories_prev_hierarchy?: Array<MaybeString>,

  entry_dates_tags?: Array<MaybeString>,

  emb_codes?: MaybeString,
  emb_codes_tags?: Array<MaybeString>,
  emb_codes_orig?: MaybeString,

  lc?: MaybeString,
  lang?: MaybeString,
  languages?: {[MaybeString]: MaybeNumber},
  languages_tags?: Array<MaybeString>,
  languages_codes?: {[MaybeString]: MaybeNumber},
  languages_hierarchy?: Array<MaybeString>,

  labels?: MaybeString,
  labels_hierarchy?: Array<MaybeString>,
  labels_prev_hierarchy?: Array<MaybeString>,
  labels_debug_tags?: Array<MaybeString>,
  labels_prev_tags?: Array<MaybeString>,

  traces?: MaybeString,
  traces_tags?: Array<MaybeString>,
  traces_hierarchy?: Array<MaybeString>,

  states?: MaybeString,
  states_tags?: Array<MaybeString>,
  states_hierarchy?: Array<MaybeString>,

  nucleotides_tags?: Array<MaybeString>,
  nucleotides_prev_tags?: Array<MaybeString>,

  nutriments?: {[MaybeString]: MaybeString | MaybeNumber},
  nutrition_score_debug?: MaybeString,
  nutrition_grades?: MaybeString,
  nutrition_grades_tags?: Array<MaybeString>,
  nutrient_levels?: {[MaybeString]: MaybeString},
  nutrient_levels_tags?: Array<MaybeString>,
  unknown_nutrients_tags?: Array<MaybeString>,
  no_nutrition_data?: MaybeString,
  nutrition_data_prepared_per?: MaybeString,
  nutrition_data_per?: MaybeString,
  nutrition_data_per_debug_tags?: Array<MaybeString>,
  nutrition_score_warning_no_fruits_vegetables_nuts?: MaybeNumber,

  quality_tags?: Array<MaybeString>,

  minerals_tags?: Array<MaybeString>,
  minerals_prev_tags?: Array<MaybeString>,

  misc_tags?: Array<MaybeString>,
  editors_tags?: Array<MaybeString>,
  informers_tags?: Array<MaybeString>,
  correctors_tags?: Array<MaybeString>,
  photographers_tags?: Array<MaybeString>,

  ingredients?: Array<{
    id?: MaybeString,
    test?: MaybeString,
    rank?: MaybeNumber
  }>,
  ingredients_text?: MaybeString,
  ingredients_hierarchy?: Array<MaybeString>,
  ingredients_tags?: Array<MaybeString>,
  ingredients_debug?: Array<MaybeString>,
  ingredients_ids_debug?: Array<MaybeString>,
  ingredients_text_debug?: MaybeString,
  ingredients_text_with_allergens?: MaybeString,
  ingredients_from_palm_oil_tags?: Array<MaybeString>,
  ingredients_that_may_be_from_palm_oil_tags?: Array<MaybeString>,
  unknown_ingredients_n?: MaybeNumber,

  packaging?: MaybeString,
  packaging_tags?: Array<MaybeString>,

  product_quantity?: MaybeNumber,
  product_name_debug_tags?: Array<MaybeString>,

  purchase_places?: MaybeString,
  purchase_places_tags?: Array<MaybeString>,

  manufacturing_places?: MaybeString,
  manufacturing_places_tags?: Array<MaybeString>,

  vitamins_prev_tags?: Array<MaybeString>,

  origins?: MaybeString,
  origins_tags?: Array<MaybeString>,

  [string]: any
};

export type Response = {
  count: number,
  page: string,
  page_size: number,
  skip: number,
  products: Array<Product>
};
