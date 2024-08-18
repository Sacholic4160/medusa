/**
 * @schema AdminPriceListListResponse
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminPriceListListResponse
 * required:
 *   - limit
 *   - offset
 *   - count
 *   - price_lists
 * properties:
 *   limit:
 *     type: number
 *     title: limit
 *     description: The price list's limit.
 *   offset:
 *     type: number
 *     title: offset
 *     description: The price list's offset.
 *   count:
 *     type: number
 *     title: count
 *     description: The price list's count.
 *   price_lists:
 *     type: array
 *     description: The price list's price lists.
 *     items:
 *       $ref: "#/components/schemas/AdminPriceList"
 * 
*/
