import { params } from '../cli.mjs';

describe('params', () => {
    it('should parse arguments and options correctly', () => {
        const [args, opts] = params(['--verbose', '-abc', 'file1.txt', 'file2.txt']);
        expect(args).toEqual(['file1.txt', 'file2.txt']);
        expect(opts).toEqual({ verbose: true, a: true, b: true, c: true });
    });

    it('should handle the -- separator correctly', () => {
        const [args, opts] = params(['-x', '--', '--not-an-option', 'file.txt']);
        expect(args).toEqual(['--not-an-option', 'file.txt']);
        expect(opts).toEqual({ x: true });
    });

    it('should handle no options correctly', () => {
        const [args, opts] = params(['file1.txt', 'file2.txt']);
        expect(args).toEqual(['file1.txt', 'file2.txt']);
        expect(opts).toEqual({});
    });
});

