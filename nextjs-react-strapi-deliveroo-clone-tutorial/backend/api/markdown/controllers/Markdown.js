'use strict';

/**
 * Markdown.js controller
 *
 * @description: A set of functions called "actions" for managing `Markdown`.
 */

module.exports = {

  /**
   * Retrieve markdown records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.markdown.search(ctx.query);
    } else {
      return strapi.services.markdown.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a markdown record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.markdown.fetch(ctx.params);
  },

  /**
   * Count markdown records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.markdown.count(ctx.query);
  },

  /**
   * Create a/an markdown record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.markdown.add(ctx.request.body);
  },

  /**
   * Update a/an markdown record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.markdown.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an markdown record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.markdown.remove(ctx.params);
  }
};
