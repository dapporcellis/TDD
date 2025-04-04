
describe('Api de usuario', () => {
    test('Criar usuario', async ()=>{
        const res = await request(app)
        .post('/usuarios').send({nome:'Diego',email: 'test@example.com'});

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.nome).toBe('Diego');
    })
})
