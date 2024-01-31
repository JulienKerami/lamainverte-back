const { Router } = require("express");
const zoneController = require("../controllers/zone.controller");
const zoneRouter = Router();

/**
 * @swagger
 * /zones:
 *   post:
 *     summary: Create a new zone
 *     description: Allows a user to create a new zone.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the zone to be created.
 *     responses:
 *       200:
 *         description: Zone created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *       400:
 *         description: Invalid input, object invalid.
 *       500:
 *         description: Server error.
 *
 * /zones/{zoneId}:
 *   delete:
 *     summary: Delete a zone
 *     description: Allows a user to delete a specific zone.
 *     parameters:
 *       - in: path
 *         name: zoneId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Numeric ID of the zone to delete.
 *     responses:
 *       204:
 *         description: Zone deleted successfully.
 *       500:
 *         description: Server error.
 *
 *   patch:
 *     summary: Update a zone
 *     description: Allows a user to update the details of a specific zone.
 *     parameters:
 *       - in: path
 *         name: zoneId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Numeric ID of the zone to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: New name for the zone.
 *     responses:
 *       200:
 *         description: Zone updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *       400:
 *         description: Invalid input, object invalid.
 *       500:
 *         description: Server error.
 */

zoneRouter.post("/zones", zoneController.createZone);
zoneRouter.delete("/zones/:zoneId", zoneController.deleteZone);
zoneRouter.patch("/zones/:zoneId", zoneController.updateZone);

module.exports = zoneRouter;
