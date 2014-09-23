<?php

/*
 * This file is part of the Claroline Connect package.
 *
 * (c) Claroline Consortium <consortium@claroline.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

include __DIR__ . '/authorize.php';

$ds = DIRECTORY_SEPARATOR;
$logDir = __DIR__ . "{$ds}..{$ds}..{$ds}app{$ds}logs{$ds}composer.log";
echo @file_get_contents($logDir);