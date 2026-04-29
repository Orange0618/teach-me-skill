#!/usr/bin/env node

/*
 * claude-teach-me — install script
 *
 * Copies the Teach Me skill into the current project so Claude Code
 * can load it automatically.
 *
 * Usage:  npx claude-teach-me
 *         npx claude-teach-me /path/to/project
 */

const fs   = require('fs');
const path = require('path');

// --- helpers -------------------------------------------------------

function mkdirp(dir) {
    fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dst) {
    fs.copyFileSync(src, dst);
}

// --- main ----------------------------------------------------------

function main() {
    // The user can optionally pass a project root as an argument.
    const targetRoot = process.argv[2]
        ? path.resolve(process.argv[2])
        : process.cwd();

    // Where the skill lives inside THIS package (shipped alongside install.js).
    const pkgRoot   = path.resolve(__dirname);
    const srcFile   = path.join(pkgRoot, 'SKILL.md');
    const skillDir  = path.join(targetRoot, '.claude', 'skills', 'teach-me');
    const dstFile   = path.join(skillDir, 'SKILL.md');

    console.log('\n  📦 claude-teach-me  v1.0.0\n');
    console.log('  Installing Teach Me skill...');
    console.log(`    project : ${targetRoot}`);
    console.log(`    dest    : ${path.relative(targetRoot, dstFile)}\n`);

    // Create .claude/skills/teach-me/
    mkdirp(skillDir);

    // Copy the skill definition
    copyFile(srcFile, dstFile);

    console.log('  ✅ Teach Me skill installed!\n');
    console.log('  Try it now:');
    console.log('    /teach-me 教我完成...\n');
}

main();
