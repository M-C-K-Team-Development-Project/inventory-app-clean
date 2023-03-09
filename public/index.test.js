const {sequelize} = require('./db');
const { Items } = require ('./server/models/index.js');

describe('Create Items', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create an Item', async () => {
        const testItem = await Items.create({ title: 'iPhone', price: '£999', description: 'The latest iPhone', category: 'Electronics', image: 'https://www.pexels.com/photo/black-iphone-7-on-brown-table-699122/' });
        expect(testItem.title).toBe('iPhone');
        expect(testItem.price).toBe('£999');
        expect(testItem.description).toBe('The latest iPhone');
    });
});

describe('Read & Update Items', () => {

    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
          // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });
    
    test('can read all Items', async () => {
        await Items.create({title: 'iPhone', price: '£999', description: 'The latest iPhone', category: 'Electronics', image: 'https://www.pexels.com/photo/black-iphone-7-on-brown-table-699122/' });
        await Items.create({title: 'iPad', price: '£1500', description: 'The latest iPad', category: 'Electronics', image: 'https://www.pexels.com/photo/turned-on-ipad-1334597/' });
        const items = await Items.findAll();
        expect(items.length).toBeGreaterThan(0);
        expect(items[0].title).toBe('iPhone');
        expect(items[0].price).toBe('£999');
        expect(items[1].title).toBe('iPad');
        expect(items[1].price).toBe('£1500');
    });

    test('can update an Item', async () => {
        const testItem = await Items.create({ title: 'iPhone', price: '£999', description: 'The latest iPhone', category: 'Electronics', image: 'https://www.pexels.com/photo/black-iphone-7-on-brown-table-699122/' });
        testItem = await Items.put({ title: 'iMac', price: '£1,999', description: 'The latest iMac', category: 'Electronics', image: 'https://www.pexels.com/photo/silver-imac-turned-on-41227/'})
        expect(testItem.title).toBe('iMac');
        expect(testItem.price).toBe('£1,999');
    })});

    describe('Delete Items', () => {
        /**
         * Runs the code prior to all tests
         */
        beforeAll(async () => {
            // the 'sync' method will create tables based on the model class
          // by setting 'force:true' the tables are recreated each time the 
          // test suite is run
          await sequelize.sync({ force: true });
      });

    test('can delete an Item', async () => {
        const testItem = await Items.create({ title: 'iPhone', price: '£999', description: 'The latest iPhone', category: 'Electronics', image: 'https://www.pexels.com/photo/black-iphone-7-on-brown-table-699122/' });
        await testItem.destroy();
        const items = await Items.findAll();
        expect(items.length).toBe(0);
        expect(items[0].title).toBe(null);
    })});

