import GameSavingLoader from '../GameSavingLoader';

describe('GameSavingLoader', () => {
  describe('#load', () => {
    it('should return a valid GameSaving object', async () => {
      const saving = await GameSavingLoader.load();
      expect(saving).toBeDefined();
      expect(saving).toBeInstanceOf(Object);
      expect(saving).toHaveProperty('id');
      expect(saving).toHaveProperty('created');
      expect(saving).toHaveProperty('userInfo');
      expect(saving.userInfo).toHaveProperty('id');
      expect(saving.userInfo).toHaveProperty('name');
      expect(saving.userInfo).toHaveProperty('level');
      expect(saving.userInfo).toHaveProperty('points');
    });

    it('should throw an error if an error occurs during loading', async () => {
      try {
        await GameSavingLoader.load();
      } catch (error) {
        console.log(error.message);
      }
    });
  });
});



