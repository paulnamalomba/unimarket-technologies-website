# Shared personal skills

Snapshot: 6 September 2026. These are the repository owner's 12 personal skills, copied with their available scripts, references, assets and agent metadata. Original installed files are unchanged. Bundled system skills and plugin caches are not part of this collection.

## Use with your assistant

Point your assistant to `shared-skills/<skill-name>/SKILL.md` and ask it to apply that skill to the current task. Alternatively, copy the entire selected skill directory into your assistant's configured skills directory. Keep its supporting subdirectories together; copying only SKILL.md can break relative resource references. Check for an existing installation before copying over it.

For Unimarket Technologies work, supply the intended target paths. Commit notes go to `.commits/<version>.txt` (or `.commit/<version>.txt`), with version progression following `unimarket website v<version>` (e.g., `unimarket website v1.0.0.0005`). Other output locations should be specified in the task. Do not apply external repository version sequences automatically.

## Included skills

| Skill | Purpose |
|---|---|
| [code-analysis-recommendations](code-analysis-recommendations/SKILL.md) | Source analysis and precise replacement recommendations |
| [comment-out-non-performant-scalers](comment-out-non-performant-scalers/SKILL.md) | Remove redundant Flutter font-scaling calls within an authorized scope |
| [convert-docx-to-md](convert-docx-to-md/SKILL.md) | Convert Word documents with their supporting media |
| [create-commit-notes](create-commit-notes/SKILL.md) | Detailed version notes grounded in current Git changes |
| [create-release-listing-summaries](create-release-listing-summaries/SKILL.md) | User-facing app-store release summaries |
| [create-specifications-existing-projects](create-specifications-existing-projects/SKILL.md) | Specifications grounded in existing source code |
| [create-substream-work-summary](create-substream-work-summary/SKILL.md) | Structured technical work summaries |
| [create-technical-architecture](create-technical-architecture/SKILL.md) | Technical architecture documents |
| [deep-code-and-security-audits](deep-code-and-security-audits/SKILL.md) | Architectural, code-quality and security analysis |
| [merge-customer-journeys-into-specifications](merge-customer-journeys-into-specifications/SKILL.md) | Trace journey requirements into existing specifications |
| [optimize-docker-builds](optimize-docker-builds/SKILL.md) | Inspect and improve container build performance |
| [ux-system-analyzer](ux-system-analyzer/SKILL.md) | Compare screenshots and source for design inconsistencies |

## Source differences and verification

The default copies come from the personal `.agents/skills` collection. Eleven have identical matching copies in `.codex/skills`. `code-analysis-recommendations` differs in its Ecoride output-directory examples: the `.agents` copy uses `~/Development/ecoride`, while the `.codex` copy uses `~/Development/ecoride_project/ecoride` and mentions a repository-relative alternative. Neither was silently merged or declared to supersede the other.

The complete alternative is retained at [_variants/codex/code-analysis-recommendations](./_variants/codex/code-analysis-recommendations/SKILL.md). Install only one version of this named skill. `_variants` is an archive, not a second default installation.

[manifest.json](manifest.json) records the source collection and SHA-256 digest of every copied file. All 27 packaged files were compared byte-for-byte with their source. Supporting scripts were copied, not executed; installing a skill does not validate its behavior on another project.
